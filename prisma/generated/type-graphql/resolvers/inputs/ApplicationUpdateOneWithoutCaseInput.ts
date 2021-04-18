import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutCaseInput } from "../inputs/ApplicationCreateOrConnectWithoutCaseInput";
import { ApplicationCreateWithoutCaseInput } from "../inputs/ApplicationCreateWithoutCaseInput";
import { ApplicationUpdateWithoutCaseInput } from "../inputs/ApplicationUpdateWithoutCaseInput";
import { ApplicationUpsertWithoutCaseInput } from "../inputs/ApplicationUpsertWithoutCaseInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpdateOneWithoutCaseInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutCaseInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutCaseInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutCaseInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutCaseInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationWhereUniqueInput, {
    nullable: true
  })
  connect?: ApplicationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutCaseInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutCaseInput | undefined;
}
