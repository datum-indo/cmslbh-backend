import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { RenamedcaseCreateOrConnectWithoutActivitiesInput } from "../inputs/RenamedcaseCreateOrConnectWithoutActivitiesInput";
import { RenamedcaseCreateWithoutActivitiesInput } from "../inputs/RenamedcaseCreateWithoutActivitiesInput";
import { RenamedcaseUpdateWithoutActivitiesInput } from "../inputs/RenamedcaseUpdateWithoutActivitiesInput";
import { RenamedcaseUpsertWithoutActivitiesInput } from "../inputs/RenamedcaseUpsertWithoutActivitiesInput";
import { RenamedcaseWhereUniqueInput } from "../inputs/RenamedcaseWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class RenamedcaseUpdateOneWithoutActivitiesInput {
  @TypeGraphQL.Field(_type => RenamedcaseCreateWithoutActivitiesInput, {
    nullable: true
  })
  create?: RenamedcaseCreateWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseCreateOrConnectWithoutActivitiesInput, {
    nullable: true
  })
  connectOrCreate?: RenamedcaseCreateOrConnectWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpsertWithoutActivitiesInput, {
    nullable: true
  })
  upsert?: RenamedcaseUpsertWithoutActivitiesInput | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseWhereUniqueInput, {
    nullable: true
  })
  connect?: RenamedcaseWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => RenamedcaseUpdateWithoutActivitiesInput, {
    nullable: true
  })
  update?: RenamedcaseUpdateWithoutActivitiesInput | undefined;
}
