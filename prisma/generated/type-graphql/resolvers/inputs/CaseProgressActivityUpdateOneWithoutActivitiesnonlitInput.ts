import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput";
import { CaseProgressActivityCreateWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityCreateWithoutActivitiesnonlitInput";
import { CaseProgressActivityUpdateWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityUpdateWithoutActivitiesnonlitInput";
import { CaseProgressActivityUpsertWithoutActivitiesnonlitInput } from "../inputs/CaseProgressActivityUpsertWithoutActivitiesnonlitInput";
import { CaseProgressActivityWhereUniqueInput } from "../inputs/CaseProgressActivityWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CaseProgressActivityUpdateOneWithoutActivitiesnonlitInput {
  @TypeGraphQL.Field(_type => CaseProgressActivityCreateWithoutActivitiesnonlitInput, {
    nullable: true
  })
  create?: CaseProgressActivityCreateWithoutActivitiesnonlitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput, {
    nullable: true
  })
  connectOrCreate?: CaseProgressActivityCreateOrConnectWithoutActivitiesnonlitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpsertWithoutActivitiesnonlitInput, {
    nullable: true
  })
  upsert?: CaseProgressActivityUpsertWithoutActivitiesnonlitInput | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityWhereUniqueInput, {
    nullable: true
  })
  connect?: CaseProgressActivityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CaseProgressActivityUpdateWithoutActivitiesnonlitInput, {
    nullable: true
  })
  update?: CaseProgressActivityUpdateWithoutActivitiesnonlitInput | undefined;
}
