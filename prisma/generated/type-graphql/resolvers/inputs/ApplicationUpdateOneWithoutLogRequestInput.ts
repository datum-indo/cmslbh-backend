import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ApplicationCreateOrConnectWithoutLogRequestInput } from "../inputs/ApplicationCreateOrConnectWithoutLogRequestInput";
import { ApplicationCreateWithoutLogRequestInput } from "../inputs/ApplicationCreateWithoutLogRequestInput";
import { ApplicationUpdateWithoutLogRequestInput } from "../inputs/ApplicationUpdateWithoutLogRequestInput";
import { ApplicationUpsertWithoutLogRequestInput } from "../inputs/ApplicationUpsertWithoutLogRequestInput";
import { ApplicationWhereUniqueInput } from "../inputs/ApplicationWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ApplicationUpdateOneWithoutLogRequestInput {
  @TypeGraphQL.Field(_type => ApplicationCreateWithoutLogRequestInput, {
    nullable: true
  })
  create?: ApplicationCreateWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationCreateOrConnectWithoutLogRequestInput, {
    nullable: true
  })
  connectOrCreate?: ApplicationCreateOrConnectWithoutLogRequestInput | undefined;

  @TypeGraphQL.Field(_type => ApplicationUpsertWithoutLogRequestInput, {
    nullable: true
  })
  upsert?: ApplicationUpsertWithoutLogRequestInput | undefined;

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

  @TypeGraphQL.Field(_type => ApplicationUpdateWithoutLogRequestInput, {
    nullable: true
  })
  update?: ApplicationUpdateWithoutLogRequestInput | undefined;
}
